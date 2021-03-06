import cookieParser from 'cookie-parser';
import express from 'express';
import httpErrors from 'http-errors';
import morgan from 'morgan';

import loginRouter from './api/loginRouter';
import productRouter from './api/productRouter';
import userRouter from './api/userRouter';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1/products', productRouter());
app.use('/api/v1/users', userRouter());
app.use('/api/v1/login', loginRouter());

// catch 404 and forward to error handler
app.use((req: any, res: any, next: any): any => next(httpErrors(404)));

// error handler
app.use((err: any, req: any, res: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
