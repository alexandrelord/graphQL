import mongoose from 'mongoose';
import { config } from './config.js';
import chalk from 'chalk';

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log(chalk.green('MongoDB connected'));
    })
    .catch((err) => {
        console.error(err);
    });
