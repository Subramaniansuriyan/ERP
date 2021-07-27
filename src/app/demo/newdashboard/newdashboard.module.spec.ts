import { NewDashboardModule } from './newdashboard.module';

describe('DashboardModule', () => {
  let dashboardModule: NewDashboardModule;

  beforeEach(() => {
    dashboardModule = new NewDashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
