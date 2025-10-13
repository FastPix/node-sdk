/**
 * Signing Keys API Samples
 * 
 * This file demonstrates how to use the Signing Keys API to:
 * - Create signing keys
 * - List signing keys
 * - Get signing key by ID
 * - Delete signing keys
 * 
 * Run this sample:
 * npx tsx security/signing-keys.ts
 */

import { createFastpixClient, runSample } from "../common/setup.js";
import { logResponse } from "../common/config.js";

let createdKeyId: string | undefined;

async function createSigningKey() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.signingKeys.createSigningKey();

  if (result.data?.id) {
    createdKeyId = result.data.id;
  }

  logResponse("Create Signing Key", result);
  return result;
}

async function listSigningKeys() {
  const fastpix = createFastpixClient();
  
  const result = await fastpix.signingKeys.listSigningKeys();

  logResponse("List Signing Keys", result);
  return result;
}

async function getSigningKeyById() {
  if (!createdKeyId) {
    console.log("⚠️  No signing key ID available. Run createSigningKey first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.signingKeys.getSigningKeyById({
    keyId: createdKeyId,
  });

  logResponse("Get Signing Key by ID", result);
  return result;
}

async function deleteSigningKey() {
  if (!createdKeyId) {
    console.log("⚠️  No signing key ID available. Run createSigningKey first.");
    return;
  }

  const fastpix = createFastpixClient();
  
  const result = await fastpix.signingKeys.deleteSigningKey({
    keyId: createdKeyId,
  });

  logResponse("Delete Signing Key", result);
  createdKeyId = undefined; // Reset the ID since key is deleted
  return result;
}

async function demonstrateKeyUsage() {
  const fastpix = createFastpixClient();
  
  console.log("\n🔐 Signing Key Usage Demonstration:");
  console.log("===================================");
  
  // Create a new signing key
  const createResult = await fastpix.signingKeys.createSigningKey();
  const keyId = createResult.data?.id;
  const privateKey = createResult.data?.privateKey;
  
  if (keyId && privateKey) {
    console.log(`\n✅ Created signing key with ID: ${keyId}`);
    console.log(`📝 Private key (Base64 encoded): ${privateKey.substring(0, 50)}...`);
    
    console.log("\n💡 Usage Instructions:");
    console.log("1. Store the private key securely");
    console.log("2. Use the private key to sign JWTs for authentication");
    console.log("3. FastPix will use the public key to verify signed tokens");
    console.log("4. The key ID can be used to reference this key pair");
    
    // Get the key details
    const keyDetails = await fastpix.signingKeys.getSigningKeyById({ keyId });
    console.log(`\n📊 Key Details:`);
    console.log(`   ID: ${keyDetails.data?.id}`);
    console.log(`   Created: ${keyDetails.data?.createdAt}`);
    console.log(`   Status: ${keyDetails.data?.status || 'Active'}`);
    
    // Clean up
    await fastpix.signingKeys.deleteSigningKey({ keyId });
    console.log(`\n🗑️  Cleaned up signing key: ${keyId}`);
  }
  
  return createResult;
}

async function manageMultipleKeys() {
  const fastpix = createFastpixClient();
  
  console.log("\n🔑 Managing Multiple Signing Keys:");
  console.log("==================================");
  
  const keyIds = [];
  
  // Create multiple keys
  for (let i = 1; i <= 3; i++) {
    const result = await fastpix.signingKeys.createSigningKey();
    if (result.data?.id) {
      keyIds.push(result.data.id);
      console.log(`✅ Created key ${i}: ${result.data.id}`);
    }
  }
  
  // List all keys
  const allKeys = await fastpix.signingKeys.listSigningKeys();
  console.log(`\n📋 Total keys: ${allKeys.data?.keys?.length || 0}`);
  
  // Clean up all created keys
  for (const keyId of keyIds) {
    await fastpix.signingKeys.deleteSigningKey({ keyId });
    console.log(`🗑️  Deleted key: ${keyId}`);
  }
  
  return allKeys;
}

async function main() {
  console.log("🔐 Signing Keys API Samples");
  console.log("============================");
  
  await runSample("Create Signing Key", createSigningKey);
  await runSample("List Signing Keys", listSigningKeys);
  await runSample("Get Signing Key by ID", getSigningKeyById);
  await runSample("Demonstrate Key Usage", demonstrateKeyUsage);
  await runSample("Manage Multiple Keys", manageMultipleKeys);
  
  // Uncomment to delete the signing key (be careful!)
  // await runSample("Delete Signing Key", deleteSigningKey);
}

main().catch(console.error);
