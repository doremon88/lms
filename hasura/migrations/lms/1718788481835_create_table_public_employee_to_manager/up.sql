CREATE TABLE "public"."employee_to_manager" ("manager_id" uuid NOT NULL, "employee_id" uuid NOT NULL, PRIMARY KEY ("manager_id","employee_id") );
