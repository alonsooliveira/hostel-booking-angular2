import { HostelBookingAngular2Page } from './app.po';

describe('hostel-booking-angular2 App', function() {
  let page: HostelBookingAngular2Page;

  beforeEach(() => {
    page = new HostelBookingAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
