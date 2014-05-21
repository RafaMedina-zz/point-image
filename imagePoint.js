var Coord = function () {
    this.x = null;
    this.y = null;
    this.class = null;
    this.id = null;
}

var imagePoint = function (imagenId) {
    this.imagenId = imagenId;    
    this.divId = "#" + $(imagenId).parent().attr('id');
    this.coords = [];    
};
imagePoint.prototype.DrawPoint = function (coord) {
    var self = this;    
    $(self.divId).append($('<div class="point '+coord.class+'" data-id="'+coord.id+'" ></div>')
        .css('top', coord.y + 'px').css('left', coord.x + 'px'));
};
imagePoint.prototype.ClearPoint = function () {
    var self = this;
    self.coords = [];
    $(self.divId + ' .punto').remove();
};
imagePoint.prototype.CaptureMultiPoints = function () {
    var self = this;
    $(self.divId + ' ' + self.imagenId).click(function (event) {
        var coord = self.GetCoord(event);
        self.coords.push(coord);
        self.DrawPoint(coord);
    });
};
imagePoint.prototype.CapturePoint = function () {
    var self = this;
    $(self.divId + ' ' + self.imagenId).click(function (event) {
        var coord = self.GetCoord(event);
        self.ClearPoint();
        self.coords.push(coord);
        self.DrawPoint(coord);
    });
};
imagePoint.prototype.GetCoord = function (event) {
    var self = this;
    var coord = new Coord();
    coord.x = (event.offsetX ? (event.offsetX) : event.pageX - $(self.divId).offset().left) - 6;
    coord.y = (event.offsetY ? (event.offsetY) : event.pageY - $(self.divId).offset().top) - 6;
    coord.id = Math.random().toString(36).substring(7);
    return coord;
};