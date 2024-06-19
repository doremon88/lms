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
    console.log("register", req.body);
  const { email, password, first_name, last_name, role } = req.body as Record<string, string>;

  // In production app, you would check if user is already registered
  // We skip that in this tutorial for the sake of time

  // We insert the user using a mutation
  // Note that we salt and hash the password using bcrypt
  const result: any = await client.request(
    gql`
      mutation registerUser($user: user_insert_input!) {
        insert_user_one(object: $user) {
          id
        }
      }
    `,
    {
      user: {
        email,
        password: await bcrypt.hash(password, 10),
        first_name,
        last_name
      },
    }
  );

  const { insert_user_one } = result;

  const { id: userId} = insert_user_one;

  res.send({
    token: generateJWT({
      defaultRole: role || "user",
      allowedRoles: [role || "user"],
      otherClaims: {
        "X-Hasura-User-Id": userId,
      },
    }),
    user: {
      first_name,
      last_name
    }
  });
  })
);

export default router;