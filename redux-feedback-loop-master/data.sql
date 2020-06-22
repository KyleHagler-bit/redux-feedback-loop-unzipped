-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!'),
(5, 5, 1, 'Test 1!'),
(4, 2, 5, 'This is an example of a very long comment. Where will it end? I am not sure but I hope it shows me what a long comment could be like.');
--flagged and date not used at this time
