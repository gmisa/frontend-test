/**
 * Created by misag on 6/7/16.
 */

var express = require('express');
var app = express();
var fs = require('fs');
var products = require('./products.json');
var path = require('path');
var _ = require('underscore');

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port);
});

app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        'title': "Fender: The Spirit of Rock 'n' Roll since 1946",
        'description': "Experience Fender: The spirit of rock-n-roll since 1946. Shop Fender guitars, basses, amplifiers, audio equipment, accessories, apparel and more."
    });
});

app.get('/products/:id', function(req, res) {
    res.render('index', {
        'title': "Fender: The Spirit of Rock 'n' Roll since 1946",
        'description': "Experience Fender: The spirit of rock-n-roll since 1946. Shop Fender guitars, basses, amplifiers, audio equipment, accessories, apparel and more."
    });
});

app.get('/products', function(req, res) {
    res.render('index', {
        'title': "Fender: The Spirit of Rock 'n' Roll since 1946",
        'description': "Experience Fender: The spirit of rock-n-roll since 1946. Shop Fender guitars, basses, amplifiers, audio equipment, accessories, apparel and more."
    });
});

app.get('/api/products', function(req, res) {
    res.send(products);
});

app.get('/api/products/:id', function(req, res) {
    var id = req.params.id;
    
    var product = products.documents.find(function(item) {
        return item.productNo === id;
    });
    
    res.send(product)
});

app.get('/api/producttypes', function(req, res) {
    var productTypes = _.chain(products.documents)
    .map(function(item) {
        return _.pick(item, 'prodTypeId', 'productType');
    })
    .indexBy('prodTypeId').values()
    .value();

    _.each(products.documents, function(element, index, list){
        var seriesInfo = {};

        seriesInfo.seriesId = element.seriesId;
        seriesInfo.series = element.series;
        seriesInfo.selected = true;

        var prodType = _.find(productTypes, function(item) {
            return item.prodTypeId === element.prodTypeId;
        });

        if (prodType) {
            prodType.selected = true;

            if (!prodType.seriesInfo) {
                prodType.seriesInfo = [];
            }

            if (!_.findWhere(prodType.seriesInfo, {'seriesId': seriesInfo.seriesId})) {
                prodType.seriesInfo.push(seriesInfo);
            }
        }
    });

    res.send(productTypes);
});

