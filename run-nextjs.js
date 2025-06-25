#!/usr/bin/env node
const { spawn } = require('child_process');

// Kill any existing processes
const kill = spawn('pkill', ['-9', '-f', 'tsx.*server']);
kill.on('close', () => {
  console.log('Starting Next.js...');
  
  // Start Next.js
  const nextjs = spawn('npx', ['next', 'dev', '--hostname', '0.0.0.0', '--port', '5000'], {
    stdio: 'inherit',
    cwd: '/home/runner/workspace'
  });
  
  nextjs.on('error', (err) => {
    console.error('Failed to start Next.js:', err);
  });
});