alter table "public"."user" alter column "update_at" drop not null;
alter table "public"."user" add column "update_at" date;
