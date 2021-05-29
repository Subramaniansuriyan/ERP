import { SalesReportModule } from './sales-report.module';

describe('BasicElementsModule', () => {
  let salesReportModule: SalesReportModule;

  beforeEach(() => {
    salesReportModule = new SalesReportModule();
  });

  it('should create an instance', () => {
    expect(SalesReportModule).toBeTruthy();
  });
});
