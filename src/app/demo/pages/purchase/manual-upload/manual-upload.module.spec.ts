import { ManualUploadModule } from './manual-upload.module';

describe('BasicElementsModule', () => {
  let bulkUploadModule: ManualUploadModule;

  beforeEach(() => {
    bulkUploadModule = new ManualUploadModule();
  });

  it('should create an instance', () => {
    expect(ManualUploadModule).toBeTruthy();
  });
});
