SET check_function_bodies = false;
INSERT INTO public.leave_type (id, name, note) VALUES (1, 'Annual', NULL);
INSERT INTO public.leave_type (id, name, note) VALUES (2, 'Sick', NULL);
SELECT pg_catalog.setval('public.leave_type_id_seq', 2, true);
