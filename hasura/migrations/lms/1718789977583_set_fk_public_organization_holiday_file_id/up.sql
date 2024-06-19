alter table "public"."organization"
  add constraint "organization_holiday_file_id_fkey"
  foreign key ("holiday_file_id")
  references "public"."media_file"
  ("id") on update restrict on delete restrict;
