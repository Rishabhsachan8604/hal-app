declare var $:any;
export class Utils {
  public static intializedatatable(){
    $(".intializemytable").dataTable().fnDestroy();
    $(".intializemytable").DataTable({
      dom:"lBfrtip",
      buttons:["copy","csv","excel","pdf","print"]
    });
  }
  public static notification(mytitle:string,mytext:string){
      $.gritter.add({
          title: mytitle,
          text: mytext
      })
  }
  public static baseurl(){
    return 'https://hal20200127075513.azurewebsites.net/api/';
  }
  public static posturl(controllername:string){
    var baseurl=Utils.baseurl();
    return baseurl+controllername+'/post/';
  }
  public static geturl(controllername:string){
    var baseurl=Utils.baseurl();
    return baseurl+controllername+'/get/';
  }
  public static delurl(controllername:string){
    var baseurl=Utils.baseurl();
    return baseurl+controllername+'/delete/';
  }
  public static updateurl(controllername:string){
    var baseurl=Utils.baseurl();
    return baseurl+controllername+'/update/';
  }

  public static get_all_groups(selectname:string){
    var geturl=Utils.geturl('ppc');
    var allgroups='';
    $.ajax({
      type: 'Get',
      url: geturl+'get_group',
      async:false,
      headers: {
      },
      success: function (msg) {
        if(msg.status=="200"){
          if(msg.data.length>0){
            if(selectname=='All'){
              allgroups=msg.data;  
            }else{
              allgroups+="<option value='0'>Select Group</option>";
              $.each(msg.data, function(index, element) {
                allgroups+='<option value="'+element.GROUP_ID+'">'+element.GROUP_NAME+'</option>';
              });
              $('select[name="'+selectname+'"]').html(allgroups);
            }
          }
        }else{
          Utils.notification('Success',"Something Wents Wrong");
        }
      },
      error: function (msg) {
        Utils.notification('Success',"Something Wents Wrong");
      }
    });
    return allgroups;
  }

  public static get_all_category(selectname:string){
      var geturl=Utils.geturl('ppc');
      var allcategory='';
      $.ajax({
        type: 'Get',
        url: geturl+'get_cat',
        async:false,
        headers: {
        },
        success: function (msg) {
          if(msg.status=="200"){
            if(msg.data.length>0){
              if(selectname=='All'){
                allcategory=msg.data;  
              }else{
                allcategory+="<option value='0'>Select Category</option>";
                $.each(msg.data, function(index, element) {
                  allcategory+='<option value="'+element.CAT_ID+'">'+element.CAT_NAME+'</option>';
                });
                $('select[name="'+selectname+'"]').html(allcategory);
              }
            }
          }else{
            Utils.notification('Success',"Something Wents Wrong");
          }
        },
        error: function (msg) {
          Utils.notification('Success',"Something Wents Wrong");
        }
      });
      return allcategory;
  }
  public static get_all_units(selectname:string){
    var geturl=Utils.geturl('ppc');
    var allunits='';
    $.ajax({
      type: 'Get',
      url: geturl+'get_unit',
      async:false,
      headers: {
      },
      success: function (msg) {
        if(msg.status=="200"){
          if(msg.data.length>0){
            if(selectname=='All'){
              allunits=msg.data;  
            }else{
              allunits+="<option value='0'>Select Unit</option>";
              $.each(msg.data, function(index, element) {
                allunits+='<option value="'+element.UNIT_ID+'">'+element.UNIT_SYMBOL+'</option>';
              });
              $('select[name="'+selectname+'"]').html(allunits);
            }
          }
        }else{
          Utils.notification('Success',"Something Wents Wrong");
        }
      },
      error: function (msg) {
        Utils.notification('Success',"Something Wents Wrong");
      }
    });
    return allunits;
  }
  public static get_all_brands(selectname:string){
    var geturl=Utils.geturl('ppc');
    var allbrands='';
    $.ajax({
      type: 'Get',
      url: geturl+'get_brand',
      async:false,
      headers: {
      },
      success: function (msg) {
        if(msg.status=="200"){
          if(msg.data.length>0){
            if(selectname=='All'){
              allbrands=msg.data;  
            }else{
              allbrands+="<option value='0'>Select Brand</option>";
              $.each(msg.data, function(index, element) {
                allbrands+='<option value="'+element.BRAND_ID+'">'+element.BRAND_NAME+'</option>';
              });
              $('select[name="'+selectname+'"]').html(allbrands);
            }
          }
        }else{
          Utils.notification('Success',"Something Wents Wrong");
        }
      },
      error: function (msg) {
        Utils.notification('Success',"Something Wents Wrong");
      }
    });
    return allbrands;
  }
  public static get_all_size(selectname:string){
    var geturl=Utils.geturl('ppc');
    var allsize='';
    $.ajax({
      type: 'Get',
      url: geturl+'get_size',
      async:false,
      headers: {
      },
      success: function (msg) {
        if(msg.status=="200"){
          if(msg.data.length>0){
            if(selectname=='All'){
              allsize=msg.data;  
            }else{
              allsize+="<option value='0'>Select Size</option>";
              $.each(msg.data, function(index, element) {
                allsize+='<option value="'+element.SIZE_ID+'">'+element.SIZE_NAME+" ["+element.UNIT_NAME+']</option>';
              });
              $('select[name="'+selectname+'"]').html(allsize);
            }
          }
        }else{
          Utils.notification('Success',"Something Wents Wrong");
        }
      },
      error: function (msg) {
        Utils.notification('Success',"Something Wents Wrong");
      }
    });
    return allsize;
  }
  public static get_all_stock_item(selectname:string){
    var geturl=Utils.geturl('ppc');
    var allunits='';
    $.ajax({
      type: 'Get',
      url: geturl+'get_stock_item',
      async:false,
      headers: {
      },
      success: function (msg) {
        if(msg.status=="200"){
          if(msg.data.length>0){
            if(selectname=='All'){
              allunits=msg.data;  
            }else{
              allunits+="<option value='0'>Select Unit</option>";
              $.each(msg.data, function(index, element) {
                allunits+='<option value="'+element.UNIT_ID+'">'+element.UNIT_SYMBOL+'</option>';
              });
              $('select[name="'+selectname+'"]').html(allunits);
            }
          }
        }else{
          Utils.notification('Success',"Something Wents Wrong");
        }
      },
      error: function (msg) {
        Utils.notification('Success',"Something Wents Wrong");
      }
    });
    return allunits;
  }
  
}
