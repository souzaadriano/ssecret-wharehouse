/* @name createUser */
INSERT INTO
    "users" (id, "name", email, hash)
VALUES
    (:id, :name, :email, :hash);