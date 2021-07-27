import { DateWiseModule } from './date-wise-report.module';

describe('BasicElementsModule', () => {
  let bulkUploadModule: DateWiseModule;

  beforeEach(() => {
    bulkUploadModule = new DateWiseModule();
  });

  it('should create an instance', () => {
    expect(bulkUploadModule).toBeTruthy();
  });
});
