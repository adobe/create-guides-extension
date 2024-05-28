import repository_panel from './panels/repository_panel';
import annotation_toolbox from './review_app/annotation_toolbox';
import comment_reply from './review_app/comment_reply';
import inline_review_panel from './review_app/inline_review_panel';

export default {
  [repository_panel.id]: repository_panel,
  [inline_review_panel.id]: inline_review_panel,
  [annotation_toolbox.id]: annotation_toolbox,
  [comment_reply.id]: comment_reply
}
