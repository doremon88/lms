CREATE TABLE "public"."admin" ("id" uuid NOT NULL, "role" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);
