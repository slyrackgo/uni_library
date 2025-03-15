package com.example.uni_library.Product;

import com.example.uni_library.Attachment;
import com.example.uni_library.AttachmentService;
import com.example.uni_library.Product.Model.Product;
import com.example.uni_library.Product.Model.ProductDTO;
import com.example.uni_library.Product.Model.UpdateProductCommand;
import com.example.uni_library.Product.Services.*;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class ProductController {
    private final CreateProductService createProductService;
    private final GetProductsService getProductsService;
    private final UpdateProductService updateProductService;
    private final DeleteProductService deleteProductService;
    private final GetProductService getProductService;
    private final SearchProductService searchProductService;
    private final AttachmentService attachmentService;

    public ProductController(CreateProductService createProductService,
                             GetProductsService getProductsService,
                             UpdateProductService updateProductService,
                             DeleteProductService deleteProductService,
                             GetProductService getProductService,
                             SearchProductService searchProductService,
                             AttachmentService attachmentService) {
        this.createProductService = createProductService;
        this.getProductsService = getProductsService;
        this.updateProductService = updateProductService;
        this.deleteProductService = deleteProductService;
        this.getProductService = getProductService;
        this.searchProductService = searchProductService;
        this.attachmentService = attachmentService;

    }



    @PostMapping("/product")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody Product product){
        return createProductService.execute(product);
    }

    @GetMapping("/products")
    public ResponseEntity<List<ProductDTO>> getProducts(){
        return  getProductsService.execute(null);
    }

    //New mapping to find by ID
    @GetMapping("/product/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Integer id){
        return getProductService.execute(id);
    }

    @GetMapping("/product/search")
    public ResponseEntity<List<ProductDTO>> searchProductByName(@RequestParam String name){
        return  searchProductService.execute(name);
    }



    @PutMapping("/product/{id}")
    ResponseEntity<ProductDTO> postProduct(@PathVariable Integer id, @RequestBody Product product){
        return  updateProductService.execute(new UpdateProductCommand(id, product));
    }

    @DeleteMapping("/product/{id}")
    ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
        return  deleteProductService.execute(id);
    }


    @PostMapping("/product/{id}/upload")
    public ResponseEntity<ProductDTO> uploadProductFile(@PathVariable Integer id, @RequestParam("file") MultipartFile file) throws Exception {
        Attachment attachment = attachmentService.saveAttachment(file);
        Product product = getProductService.getProduct(id); // Assuming you have a method to get a product by ID
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        product.setAttachmentId(attachment.getId());
        updateProductService.execute(new UpdateProductCommand(id, product));
        return getProductService.execute(id);
    }

    @GetMapping("/product/{id}/download")
    public ResponseEntity<ByteArrayResource> downloadProductFile(@PathVariable Integer id) throws Exception {
        Product product = getProductService.getProduct(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        String attachmentId = product.getAttachmentId();
        if (attachmentId == null) {
            return ResponseEntity.notFound().build();
        }
        Attachment attachment = attachmentService.getAttachment(attachmentId); // Fetch attachment from database
        return ResponseEntity.ok()
                .contentType(org.springframework.http.MediaType.parseMediaType(attachment.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + attachment.getFileName() + "\"")
                .body(new ByteArrayResource(attachment.getData()));
    }
}
