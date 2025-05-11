import { FileReader } from './file-reader.interface.js';
import { createReadStream } from 'node:fs';
import EventEmitter from 'node:events';

const PART_SIZE = 16384;

export class TSVFileReader extends EventEmitter implements FileReader {
  constructor(private readonly filePath: string) {
    super();
  }

  public async read(): Promise<void> {
    const readStream = createReadStream(this.filePath, {
      highWaterMark: PART_SIZE,
      encoding: 'utf-8',
    });

    let remData = '';
    let nextLinePos = -1;
    let rowCount = 0;

    for await (const part of readStream) {
      remData += part.toString();

      while ((nextLinePos = remData.indexOf('\n')) >= 0) {
        const completeRow = remData.slice(0, nextLinePos + 1);
        remData = remData.slice(++nextLinePos);
        rowCount++;

        this.emit('line', completeRow);
      }
    }

    this.emit('end', rowCount);
  }
}
