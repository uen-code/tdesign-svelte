import App from './App.svelte';

// import site webComponents
import 'tdesign-site-components';
import 'tdesign-site-components/lib/styles/style.css';
import 'tdesign-site-components/lib/styles/prism-theme.less';
import 'tdesign-site-components/lib/styles/prism-theme-dark.less';

// register site change
import { registerLocaleChange } from 'tdesign-site-components';

registerLocaleChange();

// import style
import 'tdesign-svelte/style';
import '@common/style/web/docs.less';

import 'tdesign-theme-generator';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
