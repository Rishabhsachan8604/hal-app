import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-list-ppc-brand',
  templateUrl: './list-ppc-brand.component.html',
  styleUrls: ['./list-ppc-brand.component.css']
})
export class ListPpcBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.allbrandstable').html('');
    var allbrand='';
    var allbrandsrno=1;
    var allbrands=Utils.get_all_brands('All');
    if(allbrands.length>0){
      $.each(allbrands, function(index, element) {
        allbrand+='<tr><td>'+allbrandsrno+'</td>';
        allbrand+='<td>'+element.BRAND_NAME+'</td>';
        allbrand+='<td>'+element.BRAND_DESC+'</td>';
        allbrand+='<td><div class="btn-group m-b-5 m-r-5 dropup">'+
                  '<a href="javascript:;" class="btn btn-primary"><i class="fa fa-cog"></i></</a>'+
                  '<a href="javascript:;" data-toggle="dropdown" class="btn btn-primary dropdown-toggle"></a>'+
                  '<ul class="dropdown-menu pull-right">'+
                      '<li><a href="javascript:;"  class="editbrandopenmodal" attr-id="'+element.BRAND_ID+'" attr-name="'+element.BRAND_NAME+'" attr-desc="'+element.BRAND_DESC+'">Edit</a></li>'+
                      '<li><a href="javascript:void(0);" class="deletebrand" attr-id="'+element.BRAND_ID+'">Delete</a></li>'+
                  '</ul>'+
              '</div>'+
            '</td>';
            allbrand+='</tr>';
            allbrandsrno++;
      });
      $('.allbrandstable').html(allbrand);
    }
    Utils.intializedatatable();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      //for deleting group
      $('.deletebrand').on('click',function(){
        if(confirm("Are you sure want to delete")){
          var d=$(this);
          $.ajax({
            type: 'POST',
            url: Utils.delurl('ppc')+'delete_brand/'+$(this).attr('attr-id'),
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
      //for opening edit model for group
      $('.editbrandopenmodal').on('click',function(){
        $('#editbrandmodel').modal('show');
        $('#editbrandmodel').find('input[name="BRAND_ID"]').val($(this).attr('attr-id'));
        $('#editbrandmodel').find('input[name="BRAND_NAME"]').val($(this).attr('attr-name'));
        $('#editbrandmodel').find('textarea[name="BRAND_DESC"]').html($(this).attr('attr-desc'));
      });
      //for editing the details
      $('#editbrand').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.updateurl('ppc')+'edit_brand/'+$('#editbrand').find('input[name="BRAND_ID"]').val(),
          data:$("#editbrand").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.editbrand').attr("disabled", "disabled");
            $('.editbrand').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.editbrand').attr("disabled", false);
              $('.editbrand').html("Save");
              $('#editbrand').trigger('reset');
              Utils.notification('Success',"Brand Updated Successfully");
              location.reload();
            }else if(msg.status=="409"){
              $('.editbrand').attr("disabled", false);
              $('.editbrand').html("Save");
              $('#editbrand').trigger('reset');
              Utils.notification('Error',"Already Inserted");
            }else{
              $('.editbrand').attr("disabled", false);
              $('.editbrand').html("Save");
              Utils.notification('Error',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.editbrand').attr("disabled", false);
            $('.editbrand').html("Save");
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }

}
