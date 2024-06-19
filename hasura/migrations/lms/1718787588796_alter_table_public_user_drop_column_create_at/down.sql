alter table "public"."user" alter column "create_at" drop not null;
alter table "public"."user" add column "create_at" date;
