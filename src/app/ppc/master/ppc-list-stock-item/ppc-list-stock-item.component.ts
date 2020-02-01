import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-ppc-list-stock-item',
  templateUrl: './ppc-list-stock-item.component.html',
  styleUrls: ['./ppc-list-stock-item.component.css']
})
export class PpcListStockItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.allstockstable').html('');
    var allstock='';
    var allstocksrno=1;
    var allstocks=Utils.get_all_stock_item('All');
    if(allstocks.length>0){
      $.each(allstocks, function(index, element) {
        allstock+='<tr><td>'+allstocksrno+'</td>';
        allstock+='<td>'+element.SI_NAME+'</td>';
        allstock+='<td>'+element.SI_DESC+'</td>';
        allstock+='<td>'+element.GROUP_NAME+'</td>';
        allstock+='<td>'+element.CAT_NAME+'</td>';
        allstock+='<td>'+element.UNIT_SYMBOL+'</td>';
        allstock+='<td>'+element.SIZE_NAME+'</td>';
        allstock+='<td>'+element.BRAND_NAME+'</td>';
        allstock+='<td><div class="btn-group m-b-5 m-r-5 dropup">'+
                  '<a href="javascript:;" class="btn btn-primary"><i class="fa fa-cog"></i></</a>'+
                  '<a href="javascript:;" data-toggle="dropdown" class="btn btn-primary dropdown-toggle"></a>'+
                  '<ul class="dropdown-menu pull-right">'+
                      '<li><a href="javascript:;"  class="editunitopenmodal">Edit</a></li>'+
                      '<li><a href="javascript:void(0);" class="deletestockitem" attr-id="'+element.UNIT_ID+'">Delete</a></li>'+
                  '</ul>'+
              '</div>'+
            '</td>';
            allstock+='</tr>';
        allstocksrno++;
      });
      $('.allstockstable').html(allstock);
    }
    Utils.intializedatatable();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      //for deleting group
      $('.deletestockitem').on('click',function(){
        if(confirm("Are you sure want to delete")){
          var d=$(this);
          $.ajax({
            type: 'POST',
            url: Utils.delurl('ppc')+'delete_stock_item/'+$(this).attr('attr-id'),
            headers: {
            },
            beforeSend: function () {
              d.attr("disabled", "disabled");
              d.html("Please Wait...");
            },
            success: function (msg) {
              if(msg.status=="200"){
                Utils.notification('Success',"Deleted Successfully");
                location.reload();
              }else{
                d.attr("disabled", false);
                d.html("Delete");
                Utils.notification('Error',"Something Wents Wrong");
              }
            },
            error: function (msg) {
              d.attr("disabled", false);
              d.html("Delete");
              Utils.notification('Error',"Something wents wrong");
            }
          });
        }
      });
      
    });
  }
 
}
