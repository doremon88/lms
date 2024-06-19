import express from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { gql } from "graphql-request";
import { client } from "../helpers/client";
import { generateJWT } from "../helpers/jwt";''
const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body as Record<string, string>;

    let result:any = await client.request(
      gql`
        query getUserByEmail($email: String!) {
          user (where: {email: {_eq: $email}}) {
            id
            password
            first_name
            last_name
            role
          }
        }
      `,
      {
        email
      }
    );

    // Since we filtered on a non-primary key we got an array back
    let { user } = result;
    user = user[0];

    if (!user) {
      res.sendStatus(401);
      return;
    }

    // Check if password matches the hashed version
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.send({
        token: generateJWT({
          defaultRole: user.role || "user",
          allowedRoles: [user.role || "user"],
          otherClaims: {
            "X-Hasura-User-Id": user.id.toString(),
          },
        }),
        user: {
          first_name: user.first_name,
          last_name: user.last_name
        }
      });
    } else {
      res.sendStatus(401);
    }
  })
);

export default router;