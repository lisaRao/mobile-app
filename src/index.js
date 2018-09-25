import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import {Toast} from 'antd-mobile';
import {ERROR_MSG_DUAATION} from 'utils/constants';
import 'utils/flexlib';
import './index.css';

const app = dva({
  history: createHistory(),
  onError(e) {
    Toast.fail(e.message, ERROR_MSG_DUAATION);
  },
})

// 2. Plugins 公共插件
app.use(createLoading());

// 3. Model 公共model在这里注册，component的就在路由中写入
// Moved to router.js

// 4. Router 路由
app.router(require('./router'));

// 5. Start
app.start('#root');


























ReactDOM.render(<App />, document.getElementById('root'));
