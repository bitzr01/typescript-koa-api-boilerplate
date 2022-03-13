-- CreateTable
CREATE TABLE `Transaction` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `token` ENUM('FUN', 'XFUN') NOT NULL,
    `fromAddr` VARCHAR(191) NOT NULL,
    `toAddr` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `block` BIGINT NOT NULL,
    `status` ENUM('COMPLETED', 'FAILED', 'PENDING') NOT NULL DEFAULT 'PENDING',

    UNIQUE INDEX `Transaction_hash_key`(`hash`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExchangeRequest` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `triggerTxId` BIGINT NOT NULL,
    `hash` VARCHAR(191) NULL,
    `burnTxHash` VARCHAR(191) NULL,
    `status` ENUM('FUN_TO_XFUN_PENDING_TO_MINT', 'FUN_TO_XFUN_MINTING', 'FUN_TO_XFUN_MINTED', 'XFUN_TO_FUN_PENDING_TO_BURN', 'XFUN_TO_FUN_BURNING', 'XFUN_TO_FUN_BURNED', 'XFUN_TO_FUN_TRANSFERING', 'XFUN_TO_FUN_TRANSFERED', 'FAILED') NOT NULL,

    UNIQUE INDEX `ExchangeRequest_hash_key`(`hash`),
    UNIQUE INDEX `ExchangeRequest_burnTxHash_key`(`burnTxHash`),
    UNIQUE INDEX `ExchangeRequest_triggerTxId_key`(`triggerTxId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `address` VARCHAR(191) NOT NULL,
    `funBalance` DECIMAL(65, 30) NOT NULL,
    `xFunBalance` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `Account_address_key`(`address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FunTokenPrice` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usd` DECIMAL(65, 30) NOT NULL,
    `eth` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EthGasPrice` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `price` DECIMAL(65, 30) NOT NULL,
    `maxFeePerGas` DECIMAL(65, 30) NOT NULL,
    `maxPriorityFeePerGas` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ExchangeRequest` ADD CONSTRAINT `ExchangeRequest_triggerTxId_fkey` FOREIGN KEY (`triggerTxId`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
