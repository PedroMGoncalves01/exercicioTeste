const defineConfig = {

    timeout: 60000,
  
    retries: 1,
  
    testDir: './tests',
  
    use: {
  
      headless: true,
  
      viewport: { width: 1920, height: 1080 },
  
      ignoreHTTPSErrors: true
  
    }
  };
  export default defineConfig;