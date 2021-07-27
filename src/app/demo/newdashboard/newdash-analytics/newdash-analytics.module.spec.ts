import { NewDashAnalyticsModule } from './newdash-analytics.module';

describe('DashAnalyticsModule', () => {
  let dashAnalyticsModule: NewDashAnalyticsModule;

  beforeEach(() => {
    dashAnalyticsModule = new NewDashAnalyticsModule();
  });

  it('should create an instance', () => {
    expect(NewDashAnalyticsModule).toBeTruthy();
  });
});
