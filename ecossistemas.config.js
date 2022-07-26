module.exports = {
    apps: [
      {
        name: 'vast-retreat-91404',
        script: 'yarn',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
        exp_backoff_restart_delay: 100,
      },
    ],
  };