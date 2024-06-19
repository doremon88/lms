alter table "public"."media_file" alter column "key" drop not null;
ALTER TABLE "public"."media_file" ALTER COLUMN "key" drop default;
