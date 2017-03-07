
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, users_id: 99901, profile_picture_url: 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/a/aardvark_thumb.JPG', url: 'https://developer.mozilla.org/en-US/'},
        {id: 2, users_id: 99902, profile_picture_url: 'https://yt3.ggpht.com/-_IXzYFNWU8U/AAAAAAAAAAI/AAAAAAAAAAA/6tXWVmD0E64/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', url: 'https://developer.mozilla.org/en-US/'},
        {id: 3, users_id: 99903, profile_picture_url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Capybara_portrait.jpg', url: 'https://developer.mozilla.org/en-US/'}
      ]);
    });
};
