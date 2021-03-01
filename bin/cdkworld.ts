#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkworldStack } from '../lib/cdkworld-stack';

const app = new cdk.App();
new CdkworldStack(app, 'CdkworldStack');
