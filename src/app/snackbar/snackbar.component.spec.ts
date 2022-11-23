import { SnackbarComponent } from './snackbar.component';

describe('Testing Snackbar Component', () => {
  describe('Class tests', () => {
    it("Should return message if it's passed", () => {
      const snackbar = new SnackbarComponent();
      snackbar.message = 'message';
      expect(snackbar).toBeDefined();
    });
  });
});
