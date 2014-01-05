


WebCam.Image = DS.Model.extend({
  file: DS.attr('string'),  
  timestamp: DS.attr('date')
});

WebCam.Image.FIXTURES = [
{
    id: 0,
    timestamp: "2013-12-30T10:00:00+07:00",
    file: "test/images/2013_12_30_10_00.jpg"
},
{
    id: 1,
    timestamp: "2013-12-30T10:00:00+07:00",
    file: "test/images/2013_12_30_10_15.jpg"
},
{
    id: 2,
    timestamp: "2013-12-30T10:00:00+07:00",
    file: "test/images/2013_12_30_10_30.jpg"
},
{
    id: 3,
    timestamp: "2013-12-30T10:00:00+07:00",
    file: "test/images/2013_12_30_10_45.jpg"
},
{
    id: 4,
    timestamp: "2013-12-30T10:00:00+07:00",
    file: "test/images/2013_12_30_11_00.jpg"
}
]




