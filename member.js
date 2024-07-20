function skillsMember() {
    var member = new Member('Skills');
    member.name = 'Skills';
    member.id = 'skills';
    member.title = 'Skills';
    member.description = 'Skills';
    member.icon = 'fa fa-trophy';
    member.addCard(new Card('Skills', 'skills', 'skills'));
    return member;
}