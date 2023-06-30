mkdir -p ./src/infra/engines/database/models/temp

for file in ./src/infra/engines/database/models/*.prisma; do
    sed '/\/\/@relations/,$d' "$file" > "./src/infra/engines/database/models/temp/$(basename "$file")"
done

cat ./src/infra/engines/database/models/connection.config ./src/infra/engines/database/models/temp/*.prisma > ./src/infra/engines/database/schema.prisma
rm -rf ./src/infra/engines/database/models/temp
yarn format:schema