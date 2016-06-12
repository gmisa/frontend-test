/**
 * Created by misag on 6/11/16.
 */

describe('Fender Frontend-test: Product Catalog Component -', function () {
    var scope, template, component;
    var element, $rootScope, $compile, $componentController, $q, $httpBackend, productCatalog, productTypes, product;

    beforeEach(angular.mock.module('fenderApp'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_, _$componentController_, _$q_, _productCatalogService_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $componentController = _$componentController_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
        productCatalogService = _productCatalogService_;

        productCatalog = {"total":20,"documents":[{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Standard Jaguar® Bass, Rosewood Fingerboard, Black","Standard Jaguar® Bass, Rosewood Fingerboard, Ghost Silver","Standard Jaguar® Bass, Rosewood Fingerboard, Olympic White"],"refinementColor_en":["Black","Silver","White"],"partNumber":["0149700506","0149700581","0149700505"],"color_en":["Black","Ghost Silver","Olympic White"],"inStock_US_CONSUMER":"inStock","upc":["885978586554","885978586561","885978586547"],"productNo":"0149700","productDisplayName_en":"Standard Jaguar® Bass","series":"Standard","seriesDispRk":9,"prodSubTypeId":"bass_guitars","brandId":"fender","subBrandDispRk":1,"productSubType":"Bass Guitars","productType":"Guitars","bodyShape":"Jaguar® Bass","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0149700581_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/MedJpg/10003/0149700581_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10002/0149700581_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar_bass","seriesId":"standard","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Troy Sanders Jaguar® Bass, Rosewood Fingerboard, Silverburst"],"refinementColor_en":["Silver"],"partNumber":["0143110391"],"color_en":["Silverburst"],"inStock_US_CONSUMER":"inStock","upc":["885978320141"],"productNo":"014311","productDisplayName_en":"Troy Sanders Jaguar® Bass","series":"Artist","seriesDispRk":141,"prodSubTypeId":"bass_guitars","brandId":"fender","subBrandDispRk":5,"productSubType":"Bass Guitars","productType":"Guitars","bodyShape":"Jaguar® Bass","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0143110391_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10002/0143110391_gtr_frt_001_rr.jpg"],"brand":"Fender","bodyShapeId":"jaguar_bass","seriesId":"artist","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["American Vintage '62 Jaguar® Control Mounting Bracket"],"refinementColor_en":["Steel"],"partNumber":["0054503000"],"color_en":["Steel"],"inStock_US_CONSUMER":"inStock","upc":["717669071769"],"productNo":"0054503000","productDisplayName_en":"American Vintage '62 Jaguar Control Mounting Bracket","series":"Mounting Hardware","seriesDispRk":206,"prodSubTypeId":"mounting_hardware","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Mounting Hardware","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/LgJpg/10001/0054503000_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054503000_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"mounting_hardware","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["American Vintage '62 Jaguar® Mute Assembly Plunger"],"refinementColor_en":["Silver"],"partNumber":["0054486000"],"color_en":["Nickel"],"inStock_US_CONSUMER":"inStock","upc":["717669071714"],"productNo":"0054486000","productDisplayName_en":"Plunger for '62 Jaguar Mute Assembly","series":"Miscellaneous Parts","seriesDispRk":213,"prodSubTypeId":"miscellaneous_parts","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Miscellaneous Parts","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10001/0054486000_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054486000_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"miscellaneous_parts","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Jaguar® Preset Control Plate, Chrome"],"refinementColor_en":["Silver"],"partNumber":["0054502000"],"color_en":["Chrome"],"inStock_US_CONSUMER":"inStock","upc":["717669068455"],"productNo":"0054502000","productDisplayName_en":"Jaguar Preset Control Plate","series":"Plates & Covers","seriesDispRk":208,"prodSubTypeId":"plates_and_metal_covers","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Plates and Metal Covers","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/LgJpg/10001/0054502000_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054502000_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"plates_covers","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["American Vintage '62 Jaguar® Mute Plate"],"refinementColor_en":["Silver"],"partNumber":["0054498000"],"color_en":["Chrome"],"inStock_US_CONSUMER":"inStock","upc":["717669071745"],"productNo":"0054498","productDisplayName_en":"Mute Plate for American Vintage '62 Jaguar","series":"Miscellaneous Parts","seriesDispRk":213,"prodSubTypeId":"miscellaneous_parts","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Miscellaneous Parts","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10001/0054498000_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054498000_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054498000_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/MedJpg/10001/0054498000_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"miscellaneous_parts","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Johnny Marr Jaguar®, Rosewood Fingerboard, Olympic White","Johnny Marr Jaguar®, Rosewood Fingerboard, Sherwood Green Metallic","Johnny Marr Jaguar®, Rosewood Fingerboard, Metallic KO"],"refinementColor_en":["White","Green","Black"],"partNumber":["0116400705","0116400746","0116400750"],"color_en":["Olympic White","Sherwood Green Metallic","Metallic KO"],"inStock_US_CONSUMER":"inStock","upc":["885978141913","885978552276","885978155361"],"productNo":"0116400","productDisplayName_en":"Johnny Marr Jaguar®","series":"Artist","seriesDispRk":141,"prodSubTypeId":"electric_guitars","brandId":"fender","subBrandDispRk":5,"productSubType":"Electric Guitars","productType":"Guitars","bodyShape":"Jaguar®","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0116400705_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10002/0116400705_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10003/0116400705_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10002/0116400705_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar","seriesId":"artist","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Vintage Modified Jaguar® Bass Special, Rosewood Fingerboard, Crimson Red Transparent","Vintage Modified Jaguar® Bass Special, Rosewood Fingerboard, Black","Vintage Modified Jaguar® Bass Special, Rosewood Fingerboard, 3-Color Sunburst"],"refinementColor_en":["Red","Black","Burst"],"partNumber":["0328900538","0328900506","0328900500"],"color_en":["Crimson Red Transparent","Black","3-Color Sunburst"],"inStock_US_CONSUMER":"inStock","upc":["885978048748","885978048731","885978048755"],"productNo":"032890","productDisplayName_en":"Vintage Modified Jaguar® Bass Special","series":"Vintage Modified Models","prodSubTypeId":"bass_guitars","brandId":"squier","subBrandDispRk":2,"productType":"Guitars","productSubType":"Bass Guitars","bodyShape":"Jaguar Bass","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10003/0328900506_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10003/0328900506_gtr_frt_001_rr.png"],"brand":"Squier","bodyShapeId":"jaguar_bass","seriesId":"vintage_modified_models","brandDispRk":3},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Vintage Modified Jaguar® Bass Special SS, Rosewood Fingerboard, Silver","Vintage Modified Jaguar® Bass Special SS, Rosewood Fingerboard, Black","Vintage Modified Jaguar® Bass Special SS, Rosewood Fingerboard, Candy Apple Red"],"refinementColor_en":["Silver","Black","Red"],"partNumber":["0328800591","0328800506","0328800509"],"color_en":["Silver","Black","Candy Apple Red"],"inStock_US_CONSUMER":"inStock","upc":["885978048724","885978048700","885978048717"],"productNo":"0328800","productDisplayName_en":"Vintage Modified Jaguar® Bass Special SS (Short Scale)","series":"Vintage Modified Models","prodSubTypeId":"bass_guitars","brandId":"squier","subBrandDispRk":2,"productType":"Guitars","productSubType":"Bass Guitars","bodyShape":"Jaguar® Bass","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0328800506_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/MedJpg/10003/0328800506_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/LgJpg/10002/0328800506_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10002/0328800506_gtr_frt_001_rr.png"],"brand":"Squier","bodyShapeId":"jaguar_bass","seriesId":"vintage_modified_models","brandDispRk":3},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Classic Player Jaguar® Special, Rosewood Fingerboard, Candy Apple Red","Classic Player Jaguar® Special, Rosewood Fingerboard, 3-Color Sunburst"],"refinementColor_en":["Red","Burst"],"partNumber":["0141700309","0141700300"],"color_en":["Candy Apple Red","3-Color Sunburst"],"inStock_US_CONSUMER":"inStock","upc":["717669639822","717669639815"],"productNo":"014170","productDisplayName_en":"Classic Player Jaguar® Special","series":"Classic","seriesDispRk":77,"prodSubTypeId":"electric_guitars","brandId":"fender","subBrandDispRk":3,"productSubType":"Electric Guitars","productType":"Guitars","bodyShape":"Jaguar®","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0141700309_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/MedJpg/10003/0141700309_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/LgJpg/10002/0141700309_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar","seriesId":"classic","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Kurt Cobain Jaguar®, Rosewood Fingerboard, 3-Color Sunburst"],"refinementColor_en":["Burst"],"partNumber":["0143001700"],"color_en":["3-Color Sunburst"],"inStock_US_CONSUMER":"inStock","upc":["885978414420"],"productNo":"0143001700","productDisplayName_en":"Kurt Cobain Jaguar®","series":"Artist","seriesDispRk":141,"prodSubTypeId":"electric_guitars","brandId":"fender","subBrandDispRk":5,"productSubType":"Electric Guitars","productType":"Guitars","bodyShape":"Jaguar®","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10003/0143001700_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10003/0143001700_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/LgJpg/10003/0143001700_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/LgJpg/10003/0143001700_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar","seriesId":"artist","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["American Standard Jaguar® Bass, Rosewood Fingerboard, 3-Color Sunburst","American Standard Jaguar® Bass, Rosewood Fingerboard, Mystic Red","American Standard Jaguar® Bass, Rosewood Fingerboard, Black","American Standard Jaguar® Bass, Rosewood Fingerboard, Olympic White"],"refinementColor_en":["Burst","Red","Black","White"],"partNumber":["0194700700","0194700794","0194700706","0194700705"],"color_en":["3-Color Sunburst","Mystic Red","Black","Olympic White"],"inStock_US_CONSUMER":"inStock","upc":["885978319480","885978319510","885978319497","885978319503"],"productNo":"019470","productDisplayName_en":"American Standard Jaguar® Bass","series":"American Standard","seriesDispRk":5,"prodSubTypeId":"bass_guitars","brandId":"fender","subBrandDispRk":1,"productSubType":"Bass Guitars","productType":"Guitars","bodyShape":"Jaguar® Bass","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10003/0194700705_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10003/0194700705_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar_bass","seriesId":"american_standard","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Pure Vintage 1965 Jaguar® Skirted Knobs, (2), Black"],"refinementColor_en":["Black"],"partNumber":["0019455049"],"color_en":["Black"],"inStock_US_CONSUMER":"inStock","upc":["885978492169"],"productNo":"0019455049","productDisplayName_en":"Pure Vintage 1965 Jaguar Skirted Knobs","series":"Knobs, Kits, & Pickup Covers","seriesDispRk":205,"prodSubTypeId":"control_knobs","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Control Knobs","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10001/0019455049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0019455049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0019455049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/MedJpg/10001/0019455049_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"knobs_kits_pickup_covers","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Road Worn® '60s Jaguar®, Rosewood Fingerboard, Candy Apple Red"],"refinementColor_en":["Red"],"partNumber":["0144900309"],"color_en":["Candy Apple Red"],"inStock_US_CONSUMER":"inStock","upc":["885978565870"],"productNo":"014490","productDisplayName_en":"Road Worn® '60s Jaguar®","series":"Classic","seriesDispRk":77,"prodSubTypeId":"electric_guitars","brandId":"fender","subBrandDispRk":3,"productSubType":"Electric Guitars","productType":"Guitars","bodyShape":"Jaguar®","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0144900309_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10002/0144900309_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10003/0144900309_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10002/0144900309_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar","seriesId":"classic","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Pure Vintage Pickguard, '65 Jaguar®, 10-Hole Mount, Eggshell, 3-Ply"],"refinementColor_en":["White"],"partNumber":["0094465049"],"color_en":["Eggshell White"],"inStock_US_CONSUMER":"inStock","upc":["885978508983"],"productNo":"0094465049","productDisplayName_en":"Pure Vintage '65 Jaguar Pickguard - Eggshell","series":"Pickguards & Backplates","seriesDispRk":207,"prodSubTypeId":"pickguards_backplates","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Pickguards/Backplates","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10003/0094465049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10003/0094465049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10003/0094465049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10003/0094465049_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"pickguards_backplates","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["60s Jaguar® Lacquer, Rosewood Fingerboard, Fiesta Red"],"refinementColor_en":["Red"],"partNumber":["0141230740"],"color_en":["Fiesta Red"],"inStock_US_CONSUMER":"inStock","upc":["885978471584"],"productNo":"0141230740","productDisplayName_en":"'60s Jaguar® Lacquer","series":"Classic","seriesDispRk":77,"prodSubTypeId":"electric_guitars","brandId":"fender","subBrandDispRk":3,"productSubType":"Electric Guitars","productType":"Guitars","bodyShape":"Jaguar®","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0141230740_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10002/0141230740_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10003/0141230740_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10002/0141230740_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar","seriesId":"classic","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Vintage Modified Jaguar®, Rosewood Fingerboard, Surf Green","Vintage Modified Jaguar®, Rosewood Fingerboard, 3-Color Sunburst","Vintage Modified Jaguar®, Rosewood Fingerboard, Olympic White","Vintage Modified Jaguar®, Rosewood Fingerboard, Candy Apple Red"],"refinementColor_en":["Green","Burst","White","Red"],"partNumber":["0302000557","0302000500","0302000505","0302000509"],"color_en":["Surf Green","3-Color Sunburst","Olympic White","Candy Apple Red"],"inStock_US_CONSUMER":"inStock","upc":["885978225200","885978225170","885978225187","885978225194"],"productNo":"0302000","productDisplayName_en":"Vintage Modified Jaguar®","series":"Vintage Modified Models","documents":["OriginalAll: Control Diagram.pdf","OriginalAll:&","OriginalAll:Original\\10001\\Squier Vintage Modified Jaguar 0302000XXX Wiring"],"prodSubTypeId":"electric_guitars","brandId":"squier","subBrandDispRk":1,"productSubType":"Electric Guitars","productType":"Guitars","bodyShape":"Jaguar®","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10001/0302000509_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0302000509_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/LgJpg/10001/0302000509_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/MedJpg/10001/0302000509_gtr_frt_001_rr.png"],"brand":"Squier","bodyShapeId":"jaguar","seriesId":"vintage_modified_models","brandDispRk":3},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Jaguar® Mute System Compression Spring, .240ODx1.00"],"refinementColor_en":["Nickel"],"partNumber":["0054487000"],"color_en":["Nickel"],"inStock_US_CONSUMER":"inStock","upc":["717669067946"],"productNo":"0054487000","productDisplayName_en":"Jaguar Mute System Compression Spring","series":"Miscellaneous Parts","seriesDispRk":213,"prodSubTypeId":"miscellaneous_parts","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Miscellaneous Parts","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10001/0054487000_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054487000_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"miscellaneous_parts","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["American Vintage Jaguar® Mute System Foam Strip, 3/8 x 1/4 (2)"],"refinementColor_en":["Black"],"partNumber":["0054500049"],"color_en":["Black"],"inStock_US_CONSUMER":"inStock","upc":["717669612689"],"productNo":"0054500049","productDisplayName_en":"American Vintage Jaguar Mute System Foam Strip","series":"Miscellaneous Parts","seriesDispRk":213,"prodSubTypeId":"miscellaneous_parts","brandId":"fender","subBrandDispRk":42,"productType":"Guitar and Bass Parts","productSubType":"Miscellaneous Parts","prodTypeId":"guitar_and_bass_parts","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10001/0054500049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054500049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10001/0054500049_merch_frt_001_nr.jpg","http://www.fmicassets.com/Damroot/MedJpg/10001/0054500049_merch_frt_001_nr.jpg"],"brand":"Fender","seriesId":"miscellaneous_parts","brandDispRk":1},{"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Classic Player Jaguar® Special HH, Rosewood Fingerboard, 3-Color Sunburst","Classic Player Jaguar® Special HH, Rosewood Fingerboard, Olympic White"],"refinementColor_en":["Burst","White"],"partNumber":["0141710300","0141710305"],"color_en":["3-Color Sunburst","Olympic White"],"inStock_US_CONSUMER":"inStock","upc":["717669639839","717669639846"],"productNo":"014171","productDisplayName_en":"Classic Player Jaguar® Special HH","series":"Classic","seriesDispRk":77,"prodSubTypeId":"electric_guitars","brandId":"fender","subBrandDispRk":3,"productSubType":"Electric Guitars","productType":"Guitars","bodyShape":"Jaguar®","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10003/0141710300_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10003/0141710300_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/LgJpg/10003/0141710300_gtr_frt_001_rr.png","http://www.fmicassets.com/Damroot/LgJpg/10003/0141710300_gtr_frt_001_rr.png","MainSm:Sm\\10003\\0141710300_gtr_frt_001_rr.png","MainMed:Med\\10003\\0141710300_gtr_frt_001_rr.png","MainXLg:xLg\\10003\\0141710300_gtr_frt_001_rr.png","MainGuitarVert1:GuitarVert1\\10003\\0141710300_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar","seriesId":"classic","brandDispRk":1}]};

        product = {"docType":"product","salesStatus_US_CONSUMER":"Active","skuDisplayName_en":["Standard Jaguar® Bass, Rosewood Fingerboard, Black","Standard Jaguar® Bass, Rosewood Fingerboard, Ghost Silver","Standard Jaguar® Bass, Rosewood Fingerboard, Olympic White"],"refinementColor_en":["Black","Silver","White"],"partNumber":["0149700506","0149700581","0149700505"],"color_en":["Black","Ghost Silver","Olympic White"],"inStock_US_CONSUMER":"inStock","upc":["885978586554","885978586561","885978586547"],"productNo":"0149700","productDisplayName_en":"Standard Jaguar® Bass","series":"Standard","seriesDispRk":9,"prodSubTypeId":"bass_guitars","brandId":"fender","subBrandDispRk":1,"productSubType":"Bass Guitars","productType":"Guitars","bodyShape":"Jaguar® Bass","prodTypeId":"guitars","images":["http://www.fmicassets.com/Damroot/ZoomJpg/10002/0149700581_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/MedJpg/10003/0149700581_gtr_frt_001_rr.jpg","http://www.fmicassets.com/Damroot/LgJpg/10002/0149700581_gtr_frt_001_rr.png"],"brand":"Fender","bodyShapeId":"jaguar_bass","seriesId":"standard","brandDispRk":1};

        productTypes = [
            {
                "prodTypeId":"guitars",
                "productType":"Guitars",
                "selected":true,
                "seriesInfo":[
                    {
                        "seriesId":"standard",
                        "series":"Standard",
                        "selected":true
                    },
                    {
                        "seriesId":"artist",
                        "series":"Artist",
                        "selected":true
                    },
                    {
                        "seriesId":"vintage_modified_models",
                        "series":"Vintage Modified Models",
                        "selected":true
                    },
                    {
                        "seriesId":"classic",
                        "series":"Classic",
                        "selected":true
                    },
                    {
                        "seriesId":"american_standard",
                        "series":"American Standard",
                        "selected":true
                    }
                ]
            },
            {
                "prodTypeId":"guitar_and_bass_parts",
                "productType":"Guitar and Bass Parts",
                "selected":true,
                "seriesInfo":[
                    {
                        "seriesId":"mounting_hardware",
                        "series":"Mounting Hardware",
                        "selected":true
                    },
                    {
                        "seriesId":"miscellaneous_parts",
                        "series":"Miscellaneous Parts",
                        "selected":true
                    },
                    {
                        "seriesId":"plates_covers",
                        "series":"Plates & Covers",
                        "selected":true
                    },
                    {
                        "seriesId":"knobs_kits_pickup_covers",
                        "series":"Knobs, Kits, & Pickup Covers",
                        "selected":true
                    },
                    {
                        "seriesId":"pickguards_backplates",
                        "series":"Pickguards & Backplates",
                        "selected":true
                    }
                ]
            }
        ];
        
        $httpBackend.whenGET('/api/producttypes').respond(productTypes);
        $httpBackend.whenGET('/api/products').respond(productCatalog);

        
        template = '<product-catalog></product-catalog>';
        var $scope = $rootScope.$new();
        element = $compile(template)($scope);
        $scope.$digest();

        scope = element.isolateScope();
        component = $componentController('productCatalog', {$scope: scope});

        var productsResource = new productCatalogService.getProductCatalog();
        var productTypesResource = new productCatalogService.getProductTypes();

        //Make the queries
        productsResource.get();
        productTypesResource.query();

        $httpBackend.flush();
    }));

    describe('Initialization', function () {

        it('should set all checkbox values as checked', inject(function($httpBackend, productCatalogService) {

            expect(element.find('input:checkbox:not(:checked)').length).toEqual(0);
        }));

        it('should display 20 products initally', inject(function($httpBackend, productCatalogService) {

            expect(element.find('.product-list-item').length).toEqual(20);
        }));

    });

    describe('Filtering', function () {

        it('unchecking productType Guitars should now return 8 items', inject(function($rootScope, $filter, $httpBackend, productCatalogService) {

            component.productTypes[0].selected = false;
            
            component.products = $filter('productFilter')(productCatalogService.products, component.productTypes);
            $rootScope.$digest();
            expect(element.find('.product-list-item').length).toEqual(8);

            angular.forEach(component.products, function(item) {
                expect(item.prodTypeId).not.toEqual("guitars");
            });
        }));
    });
    
    describe('Individual Item View', function () {
        it('Clicking on a product in a list should make the API call to retrieve the single product', inject(function($rootScope, $httpBackend, productCatalogService) {

            element.find('.product-list-item__info[href="/products/0149700"]').triggerHandler("click");
            $httpBackend.expectGET('/api/products/0149700');

        }));

    });
});