const Route = require('../../domain/entity/Route');
const RouterState = require('./RouterState');

describe('RouterState', () => {
  let routerState;

  beforeEach(() => {
    routerState = new RouterState();
  });

  test('activeRoute should correctly set isActive of the correct route', () => {
    routerState.activeRoute('JsonViewer')
    expect(routerState.getActiveRoute()).toBe(
      new Route({ name: 'JsonViewer', path: '/viewer', isActive: false })
    );
  });
});