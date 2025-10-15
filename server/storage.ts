import type { InsertExample, Example } from "@shared/schema";

export interface IStorage {
  // Example methods - add your own as needed
  getExamples(): Promise<Example[]>;
  createExample(data: InsertExample): Promise<Example>;
}

export class MemStorage implements IStorage {
  private examples: Example[] = [];
  private nextId = 1;

  async getExamples(): Promise<Example[]> {
    return this.examples;
  }

  async createExample(data: InsertExample): Promise<Example> {
    const example: Example = {
      id: this.nextId++,
      ...data,
      createdAt: new Date(),
    };
    this.examples.push(example);
    return example;
  }
}

export const storage = new MemStorage();
