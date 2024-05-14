// Memunculkan Replies
function toggleReplies() {
    var replies = document.getElementById('replies-one');
    if (replies.classList.contains('hidden')) {
        replies.classList.remove('hidden');
    } else {
        replies.classList.add('hidden');
    }
}