import { BulkUploadModule } from './bulk-upload.module';

describe('BasicElementsModule', () => {
  let bulkUploadModule: BulkUploadModule;

  beforeEach(() => {
    bulkUploadModule = new BulkUploadModule();
  });

  it('should create an instance', () => {
    expect(bulkUploadModule).toBeTruthy();
  });
});
