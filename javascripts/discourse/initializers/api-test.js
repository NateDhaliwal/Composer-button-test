import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer("0.11.1", (api) => {
  api.addComposerToolbarPopupMenuOption({
      action: (toolbarEvent) => {
        toolbarEvent.applySurround("**", "**");
      },
      icon: 'eye',
      label: 'composer.bold_some_text',
      shortcut: 'm',
      condition: (composer) => {
        return composer.editingPost;
      }
    });
    
    api.addUsernameSelectorDecorator(username => {
      return `<span class="status">[is_away]</class>`;
    });
});
