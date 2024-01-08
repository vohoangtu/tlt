<div class="footer">
    <div class="footer-article">
        <div class="wrap-content">
            <div class="wap_footer">
                <div class="footer-news">
                    <a class="logo-header" href="">
                        <img class="lazy loaded" onerror="this.src='thumbs/133x116x2/assets/images/noimage.png';" data-src="thumbs/133x116x2/upload/photo/logo-thanh-e-3-1174.png" alt="CHUYÊN SỈ QUẦN ÁO TRẺ EM THANH E" src="thumbs/133x116x2/upload/photo/logo-thanh-e-3-1174.png" data-was-processed="true">                    </a>
                    <div class="social">
                        <a href="https://www.facebook.com/profile.php?id=100094437609398">
                            <img src="upload/photo/mxh1-1-1957-80510.png" alt="CHUYÊN SỈ QUẦN ÁO TRẺ EM THANH E">
                        </a>
                        <a href="https://zalo.me/0911323264">
                            <img src="upload/photo/mauve-dark-professional-twitter-profile-picture-1-7994.png" alt="CHUYÊN SỈ QUẦN ÁO TRẺ EM THANH E">
                        </a>
                    </div>
                    <div class="footer-copyright">Copyright @ Thanh E. Developed by TLT</div>
                </div>
                <div class="footer-news">
                    <h2 class="footer-title2"><?= $footer['name' . $lang] ?></h2>
                    <h2 class="footer-title">Thông tin liên hệ</h2>
                    <div class="footer-info">
                        <?= $func->decodeHtmlChars($footer['content' . $lang]) ?>
                    </div>
                </div>
                <div class="footer-news">
                    <h2 class="footer-title">Chính sách</h2>
                    <ul class="footer-ul">
                        <?php foreach ($policy as $v) { ?>
                            <li><a href="<?= $v[$sluglang] ?>" title="<?= $v['name' . $lang] ?>"><?= $v['name' . $lang] ?></a></li>
                        <?php } ?>
                    </ul>
                    <a class="maqr-header" data-fancybox="" href="upload/photo/icon21-5837.png">
                        <img class="lazy loaded" onerror="this.src='thumbs/100x100x1/assets/images/noimage.png';" data-src="thumbs/100x100x1/upload/photo/icon21-5837.png" alt="CHUYÊN SỈ QUẦN ÁO TRẺ EM THANH E" src="thumbs/100x100x1/upload/photo/icon21-5837.png" data-was-processed="true">                    </a>
                </div>
                <div class="footer-news">
                    <a class="fanpagefb-header" href="https://www.facebook.com/profile.php?id=100094437609398&amp;mibextid=LQQJ4d">
                        <img class="lazy loaded" onerror="this.src='thumbs/400x400x1/assets/images/noimage.png';" data-src="thumbs/400x400x1/upload/photo/thoi-trang-du-tiec-cho-be-gai230620202320124355-8625.jpg" alt="@ThanhE-chuyên sỉ quần áo trẻ em QC" src="thumbs/400x400x1/upload/photo/thoi-trang-du-tiec-cho-be-gai230620202320124355-8625.jpg" data-was-processed="true">                        <section>
                            <i class="fab fa-facebook-f"></i>
                            <span>Follow Me</span>
                            <p>@ThanhE-chuyên sỉ quần áo trẻ em QC</p>
                        </section>
                    </a>
                </div>
                <div class="slogan_footer">Thế giới thời trang bé yêu</div>
            </div>
        </div>
    </div>
    <?php echo $addons->set('footer-map', 'footer-map', 6); ?>
    <?php echo $addons->set('messages-facebook', 'messages-facebook', 2); ?>
</div>
<?php if ($com != 'gio-hang' && config("order.active")) { ?>
    <a class="cart-fixed text-decoration-none" href="gio-hang" title="Giỏ hàng">
        <i class="fas fa-shopping-bag"></i>
        <span class="count-cart"><?= (!empty($_SESSION['cart'])) ? count($_SESSION['cart']) : 0 ?></span>
    </a>
<?php } ?>
<a class="btn-zalo btn-frame text-decoration-none" target="_blank" href="https://zalo.me/<?= preg_replace('/[^0-9]/', '', $optsetting['zalo']); ?>">
    <div class="animated infinite zoomIn kenit-alo-circle"></div>
    <div class="animated infinite pulse kenit-alo-circle-fill"></div>
    <i><?= $func->getImage(['size-error' => '35x35x2', 'upload' => 'assets/images/', 'image' => 'zl.png', 'alt' => 'Zalo']) ?></i>
</a>
<a class="btn-phone btn-frame text-decoration-none" href="tel:<?= preg_replace('/[^0-9]/', '', $optsetting['hotline']); ?>">
    <div class="animated infinite zoomIn kenit-alo-circle"></div>
    <div class="animated infinite pulse kenit-alo-circle-fill"></div>
    <i><?= $func->getImage(['size-error' => '35x35x2', 'upload' => 'assets/images/', 'image' => 'hl.png', 'alt' => 'Hotline']) ?></i>
</a>

<!-- Modal notify -->
<div class="modal modal-custom fade" id="popup-notify" tabindex="-1" role="dialog" aria-labelledby="popup-notify-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-top modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="popup-notify-label">Thông báo</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-danger" data-dismiss="modal">ĐÃ HIỂU</button>
            </div>
        </div>
    </div>
</div>
