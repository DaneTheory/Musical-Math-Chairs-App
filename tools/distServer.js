import browserSync  from 'browser-sync'
import historyApiFallback  from 'connect-history-api-fallback'

browserSync({
  port: 9222,
  ui: {
    port: 9223
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});
