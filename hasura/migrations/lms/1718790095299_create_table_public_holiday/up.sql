CREATE TABLE "public"."holiday" ("id" serial NOT NULL, "organization_id" uuid NOT NULL, "start_date" timestamptz NOT NULL, "end_date" timestamptz NOT NULL, "name" text NOT NULL, "note" text, PRIMARY KEY ("id") , FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON UPDATE restrict ON DELETE restrict);
