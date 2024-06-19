CREATE TABLE "public"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "email" text NOT NULL, "password" text NOT NULL, "phone" text, "status" boolean NOT NULL DEFAULT true, "avatar_id" integer, "create_at" date NOT NULL, "update_at" date NOT NULL, PRIMARY KEY ("id") , UNIQUE ("email"), UNIQUE ("phone"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
