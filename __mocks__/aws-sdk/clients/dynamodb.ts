import { DocumentClient as document_client } from "./document_client";

class DynamoDB {}

namespace DynamoDB {
  export import DocumentClient = document_client;
}

export = DynamoDB;
