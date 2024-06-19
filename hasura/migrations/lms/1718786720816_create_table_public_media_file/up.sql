CREATE TABLE "public"."media_file" ("id" serial NOT NULL, "key" text, "name" text, "link" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("link"));
