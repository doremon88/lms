alter table "public"."user"
  add constraint "user_avatar_id_fkey"
  foreign key ("avatar_id")
  references "public"."media_file"
  ("id") on update restrict on delete restrict;
