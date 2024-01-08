/**
 * Greek translation
 * @author yawd <info@yawd.eu>, Romanos
 * @version 2014-12-19
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['elfinder'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('elfinder'));
	} else {
		factory(root.elFinder);
	}
}(this, function(elFinder) {
	elFinder.prototype.i18.el = {
		translator : 'yawd &lt;ingo@yawd.eu&gt;',
		language   : 'Ελληνικά',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i',
		fancyDateFormat : '$1 H:i',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Πρόβλημα',
			'errUnknown'           : 'Άγνωστο πρόβλημα.',
			'errUnknownCmd'        : 'Άγνωστη εντολή.',
			'errJqui'              : 'Μη έγκυρη ρύθμιση του jQuery UI. Τα components "selectable", "draggable" και "droppable" πρέπει να περιληφούν.',
			'errNode'              : 'το elFinder χρειάζεται να έχει δημιουργηθεί το DOM Element.',
			'errURL'               : 'Μη έγκυρες ρυθμίσεις για το elFinder! η επιλογή URL δεν έχει οριστεί.',
			'errAccess'            : 'Απαγορεύεται η πρόσβαση.',
			'errConnect'           : 'Δεν ήταν δυνατή η σύνδεση με το backend.',
			'errAbort'             : 'Η σύνδεση εγκαταλείφθηκε.',
			'errTimeout'           : 'Η σύνδεση έληξε.',
			'errNotFound'          : 'Δε βρέθηκε το backend.',
			'errResponse'          : 'Μή έγκυρη απάντηση από το backend.',
			'errConf'              : 'Μη έγκυρες ρυθμίσεις για το backend.',
			'errJSON'              : 'Το PHP JSON module δεν είναι εγκατεστημένο.',
			'errNoVolumes'         : 'Δεν βρέθηκαν αναγνώσιμα volumes.',
			'errCmdParams'         : 'Μη έγκυρες παράμετροι για την εντολή "$1".',
			'errDataNotJSON'       : 'Τα δεδομένα δεν είναι JSON.',
			'errDataEmpty'         : 'Τα δεδομένα είναι άδεια.',
			'errCmdReq'            : 'Το Backend request χρειάζεται όνομα εντολής.',
			'errOpen'              : 'Δεν ήταν δυνατό να ανοίξει το "$1".',
			'errNotFolder'         : 'Το αντικείμενο δεν είναι φάκελος.',
			'errNotFile'           : 'Το αντικείμενο δεν είναι αρχείο.',
			'errRead'              : 'Δεν ήταν δυνατόν να διαβαστεί το "$1".',
			'errWrite'             : 'Δεν ήταν δυνατή η εγγραφή στο "$1".',
			'errPerm'              : 'Απαγορεύεται η πρόσβαση.',
			'errLocked'            : '"$1" είναι κλειδωμένο και δεν μπορεί να μετονομαστεί, μετακινηθεί ή διαγραφεί.',
			'errExists'            : 'Το αρχείο με όνομα "$1" υπάρχει ήδη.',
			'errInvName'           : 'Μη έγκυρο όνομα αρχείου.',
			'errFolderNotFound'    : 'Ο φάκελος δε βρέθηκε.',
			'errFileNotFound'      : 'Το αρχείο δε βρέθηκε.',
			'errTrgFolderNotFound' : 'Ο φάκελος "$1" δε βρέθηκε.',
			'errPopup'             : 'Το πρόγραμμα πλήγησης εμπόδισε το άνοιγμα αναδυόμενου παραθύρου. Για ανοίξετε το αρχείο ενεργοποιήστε το στις επιλογές του περιηγητή.',
			'errMkdir'             : 'Η δυμιουργία του φακέλου "$1" δεν ήταν δυνατή.',
			'errMkfile'            : 'Η δημιουργία του αρχείου "$1" δεν ήταν δυνατή.',
			'errRename'            : 'Η μετονομασία του αρχείου "$1" δεν ήταν δυνατή.',
			'errCopyFrom'          : 'Δεν επιτρέπεται η αντιγραφή αρχείων από το volume "$1".',
			'errCopyTo'            : 'Δεν επιτρέπεται η αντιγραφή αρχείων στο volume "$1".',
			'errUpload'            : 'Πρόβλημα κατά το upload.',
			'errUploadFile'        : 'Το αρχείο "$1" δεν μπόρεσε να γίνει upload.',
			'errUploadNoFiles'     : 'Δεν βρέθηκαν αρχεία για upload.',
			'errUploadTotalSize'   : 'Τα δεδομένα υπερβαίνουν το επιτρεπόμενο μέγιστο μέγεθος δεδομένων.',
			'errUploadFileSize'    : 'Το αρχείο υπερβαίνει το επιτρεπόμενο μέγιστο μέγεθος.',
			'errUploadMime'        : 'Ο τύπος αρχείου δεν επιτρέπεται.',
			'errUploadTransfer'    : 'Πρόβλημα μεταφοράς για το "$1".',
			'errNotReplace'        : 'Object "$1" already exists at this location and can not be replaced by object with another type.',
			'errReplace'           : 'Unable to replace "$1".',
			'errSave'              : 'Το "$1" δεν ήταν δυνατόν να αποθηκευτεί.',
			'errCopy'              : 'Δεν ήταν δυνατή η αντιγραφή του "$1".',
			'errMove'              : 'Δεν ήταν δυνατή η μετακίνηση του "$1".',
			'errCopyInItself'      : 'Δεν είναι δυνατή η αντιγραφή του "$1" στον εαυτό του.',
			'errRm'                : 'Δεν ήταν δυνατή η αφαίρεση του "$1".',
			'errRmSrc'             : 'Unable remove source file(s).',
			'errExtract'           : 'Δεν ήταν δυνατή η ανάγνωση των αρχείων από "$1".',
			'errArchive'           : 'Δεν ήταν δυνατή η δημιουργία του αρχείου.',
			'errArcType'           : 'Ο τύπος αρχείου δεν υποστηρίζεται.',
			'errNoArchive'         : 'Το αρχείο δεν είναι έγκυρο ή δεν υποστηρίζεται ο τύπος του.',
			'errCmdNoSupport'      : 'Το backend δεν υποστηρίζει αυτή την εντολή.',
			'errReplByChild'       : 'Ο φάκελος “$1” δεν μπορεί να αντικατασταθεί από οποιοδήποτε αρχείο περιέχεται σε αυτόν.',
			'errArcSymlinks'       : 'Για λόγους ασφαλείας δεν είναι δυνατόν να διαβαστούν αρχεία που περιέχουν symlinks orη αρχεία με μη επιτρεπτά ονόματα.', // edited 24.06.2012
			'errArcMaxSize'        : 'Το μέγεθος του αρχείου υπερβαίνει το μέγιστο επιτρεπτό όριο.',
			'errResize'            : 'Δεν ήταν δυνατή η αλλαγή μεγέθους του "$1".',
			'errResizeDegree'      : 'Invalid rotate degree.',
			'errResizeRotate'      : 'Unable to rotate image.',
			'errResizeSize'        : 'Invalid image size.',
			'errResizeNoChange'    : 'Image size not changed.',
			'errUsupportType'      : 'Ο τύπος αρχείου δεν υποστηρίζεται.',
			'errNotUTF8Content'    : 'Το αρχείο "$1" δεν είναι UTF-8 και δεν μπορεί να επεξεργασθεί.',  // added 9.11.2011
			'errNetMount'          : 'Δεν ήταν δυνατή η φόρτωση του "$1".',     // added 17.04.2012
			'errNetMountNoDriver'  : 'Μη υποστηριζόμενο πρωτόκολο.',     // added 17.04.2012
			'errNetMountFailed'    : 'Η φόρτωση απέτυχε.',             // added 17.04.2012
			'errNetMountHostReq'   : 'Απαιτείται host εξυπηρετητής.', // added 18.04.2012
			'errSessionExpires'    : 'Your session has expired due to inactivity.',
			'errCreatingTempDir'   : 'Unable to create temporary directory: "$1"',
			'errFtpDownloadFile'   : 'Unable to download file from FTP: "$1"',
			'errFtpUploadFile'     : 'Unable to upload file to FTP: "$1"',
			'errFtpMkdir'          : 'Unable to create remote directory on FTP: "$1"',
			'errArchiveExec'       : 'Error while archiving files: "$1"',
			'errExtractExec'       : 'Error while extracting files: "$1"',
			
			/******************************* commands names ********************************/
			'cmdarchive'   : 'Δημιουργία archive αρχείου',
			'cmdback'      : 'Πίσω',
			'cmdcopy'      : 'Αντιγραφή',
			'cmdcut'       : 'Αφαίρεση',
			'cmddownload'  : 'Μεταφόρτωση',
			'cmdduplicate' : 'Αντίγραφο',
			'cmdedit'      : 'Επεξεργασία αρχείου',
			'cmdextract'   : 'Εξαγωγή αρχείων από archive',
			'cmdforward'   : 'Προώθηση',
			'cmdgetfile'   : 'Επιλέξτε αρχεία',
			'cmdhelp'      : 'Σχετικά με αυτό το λογισμικό',
			'cmdhome'      : 'Home',
			'cmdinfo'      : 'Πληροφορίες',
			'cmdmkdir'     : 'Νέος φάκελος',
			'cmdmkfile'    : 'Νέος αρχείο',
			'cmdopen'      : 'Άνοιγμα',
			'cmdpaste'     : 'Επικόλληση',
			'cmdquicklook' : 'Προεπισκόπηση',
			'cmdreload'    : 'Ανανέωση',
			'cmdrename'    : 'Μετονομασία',
			'cmdrm'        : 'Διαγραφή',
			'cmdsearch'    : 'Έυρεση αρχείων',
			'cmdup'        : 'Μετάβαση στο γονικό φάκελο',
			'cmdupload'    : 'Ανέβασμα αρχείων',
			'cmdview'      : 'Προβολή',
			'cmdresize'    : 'Αλλαγή μεγέθους εικόνας',
			'cmdsort'      : 'Ταξινόμηση',
			'cmdnetmount'  : 'Mount network volume',
			
			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Κλείσιμο',
			'btnSave'   : 'Αποθήκευση',
			'btnRm'     : 'Αφαίρεση',
			'btnApply'  : 'Εφαρμογή',
			'btnCancel' : 'Ακύρωση',
			'btnNo'     : 'Όχι',
			'btnYes'    : 'Ναι',
			'btnMount'  : 'Mount',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Άνοιγμα φακέλου',
			'ntffile'     : 'Άνοιγμα αρχείου',
			'ntfreload'   : 'Ανανέωση περιεχομένων φακέλου',
			'ntfmkdir'    : 'Δημιουργία φακέλου',
			'ntfmkfile'   : 'Δημιουργία αρχείων',
			'ntfrm'       : 'Διαγραφή αρχείων',
			'ntfcopy'     : 'Αντιγραφή αρχείων',
			'ntfmove'     : 'Μετακίνηση αρχείων',
			'ntfprepare'  : 'Προετοιμασία αντιγραφής αρχείων',
			'ntfrename'   : 'Μετονομασία αρχείων',
			'ntfupload'   : 'Ανέβασμα αρχείων',
			'ntfdownload' : 'Μεταφόρτωση αρχείων',
			'ntfsave'     : 'Αποθήκευση αρχείων',
			'ntfarchive'  : 'Δημιουργία αρχείου',
			'ntfextract'  : 'Εξαγωγή αρχείων από το archive',
			'ntfsearch'   : 'Αναζήτηση αρχείων',
			'ntfresize'   : 'Resizing images',
			'ntfsmth'     : 'Σύστημα απασχολημένο>_<',
			'ntfloadimg'  : 'Φόρτωση εικόνας',
			'ntfnetmount' : 'Φόρτωση δικτυακού δίσκου', // added 18.04.2012
			'ntfdim'      : 'Acquiring image dimension',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'άγνωστο',
			'Today'       : 'Σήμερα',
			'Yesterday'   : 'Χθές',
			'msJan'       : 'Ιαν',
			'msFeb'       : 'Φεβ',
			'msMar'       : 'Μαρ',
			'msApr'       : 'Απρ',
			'msMay'       : 'Μαϊ',
			'msJun'       : 'Ιουν',
			'msJul'       : 'Ιουλ',
			'msAug'       : 'Αυγ',
			'msSep'       : 'Σεπ',
			'msOct'       : 'Οκτ',
			'msNov'       : 'Νοεμ',
			'msDec'       : 'Δεκ',
			'January'     : 'Ιανουάριος',
			'February'    : 'Φεβρουάριος',
			'March'       : 'Μάρτιος',
			'April'       : 'Απρίλιος',
			'May'         : 'Μάϊος',
			'June'        : 'Ιούνιος',
			'July'        : 'Ιούλιος',
			'August'      : 'Αύγουστος',
			'September'   : 'Σεπτέμβριος',
			'October'     : 'Οκτώβριος',
			'November'    : 'Νοέμβριος',
			'December'    : 'Δεκέμβριος',
			'Sunday'      : 'Κυριακή', 
			'Monday'      : 'Δευτέρα', 
			'Tuesday'     : 'Τρίτη', 
			'Wednesday'   : 'Τετάρτη', 
			'Thursday'    : 'Πέμπτη', 
			'Friday'      : 'Παρασκευή', 
			'Saturday'    : 'Σάββατο',
			'Sun'         : 'Κυρ', 
			'Mon'         : 'Δευ', 
			'Tue'         : 'Τρ', 
			'Wed'         : 'Τετ', 
			'Thu'         : 'Πεμ', 
			'Fri'         : 'Παρ', 
			'Sat'         : 'Σαβ',
			
			/******************************** sort variants ********************************/
			'sortname'          : 'κατά όνομα', 
			'sortkind'          : 'κατά είδος', 
			'sortsize'          : 'κατά μέγεθος',
			'sortdate'          : 'κατά ημερομηνία',
			'sortFoldersFirst'  : 'Πρώτα οι φάκελοι', // added 22.06.2012
			
			/********************************** messages **********************************/
			'confirmReq'      : 'Απαιτείται επιβεβαίωση',
			'confirmRm'       : 'Είστε σίγουροι πως θέλετε να διαγράψετε τα αρχεία?<br/>Οι αλλαγές θα είναι μόνιμες!',
			'confirmRepl'     : 'Αντικατάσταση του παλιού αρχείου με το νέο?',
			'apllyAll'        : 'Εφαρμογή σε όλα',
			'name'            : 'Όνομα',
			'size'            : 'Μέγεθος',
			'perms'           : 'Δικαιώματα',
			'modify'          : 'Τροποποιήθηκε',
			'kind'            : 'Είδος',
			'read'            : 'ανάγνωση',
			'write'           : 'εγγραφή',
			'noaccess'        : 'δεν υπάρχει πρόσβαση',
			'and'             : 'και',
			'unknown'         : 'άγνωστο',
			'selectall'       : 'Επιλογή όλων',
			'selectfiles'     : 'Επιλογή αρχείων',
			'selectffile'     : 'Επιλογή πρώτου αρχείου',
			'selectlfile'     : 'Επιλογή τελευταίου αρχείου',
			'viewlist'        : 'Προβολή λίστας',
			'viewicons'       : 'Προβολή εικονιδίων',
			'places'          : 'Τοποθεσίες',
			'calc'            : 'Υπολογισμός', 
			'path'            : 'Διαδρομή',
			'aliasfor'        : 'Ψευδώνυμο για',
			'locked'          : 'Κλειδωμένο',
			'dim'             : 'Διαστάσεις',
			'files'           : 'Αρχεία',
			'folders'         : 'Φάκελοι',
			'items'           : 'Αντικείμενα',
			'yes'             : 'ναι',
			'no'              : 'όχι',
			'link'            : 'Σύνδεσμος',
			'searcresult'     : 'Αποτελέσματα αναζήτησης',  
			'selected'        : 'επιλεγμένα αντικείμενα',
			'about'           : 'Σχετικά',
			'shortcuts'       : 'Συντομεύσεις',
			'help'            : 'Βοήθεια',
			'webfm'           : 'εργαλείο διαχείρισης αρχείων από το web',
			'ver'             : 'Έκδοση',
			'protocolver'     : 'έκδοση πρωτοκόλλου',
			'homepage'        : 'Σελίδα του project',
			'docs'            : 'Τεκμηρίωση (documentation)',
			'github'          : 'Κάντε μας fork στο Github',
			'twitter'         : 'Ακολουθήστε μας στο twitter',
			'facebook'        : 'Βρείτε μας στο facebook',
			'team'            : 'Ομάδα',
			'chiefdev'        : 'κύριος προγραμματιστής',
			'developer'       : 'προγραμματιστής',
			'contributor'     : 'συνεισφορά',
			'maintainer'      : 'συντηρητής',
			'translator'      : 'μεταφραστής',
			'icons'           : 'Εικονίδια',
			'dontforget'      : 'και μην ξεχάσεις την πετσέτα σου!',
			'shortcutsof'     : 'Οι συντομεύσεις είναι απενεργοποιημένες',
			'dropFiles'       : 'Κάντε drop τα αρχεία εδώ',
			'or'              : 'ή',
			'selectForUpload' : 'Επιλογή αρχείων για ανέβασμα',
			'moveFiles'       : 'Μετακίνηση αρχείων',
			'copyFiles'       : 'Αντιγραφή αρχείων',
			'rmFromPlaces'    : 'Αντιγραφή από τοποθεσίες',
			'aspectRatio'     : 'Αναλογία διαστάσεων',
			'scale'           : 'Κλίμακα',
			'width'           : 'Πλάτος',
			'height'          : 'Ύψος',
			'resize'          : 'Αλλαγή μεγέθους',
			'crop'            : 'Crop',
			'rotate'          : 'Περιστροφή',
			'rotate-cw'       : 'Περιστροφή κατά 90 βαθμούς CW',
			'rotate-ccw'      : 'Περιστροφή κατά 90 βαθμούς CCW',
			'degree'          : 'Βαθμός',
			'netMountDialogTitle' : 'Φορτώστε δικτυακό δίσκο', // added 18.04.2012
			'protocol'            : 'Πρωτόκολλο', // added 18.04.2012
			'host'                : 'Host', // added 18.04.2012
			'port'                : 'Port', // added 18.04.2012
			'user'                : 'Χρήστης', // added 18.04.2012
			'pass'                : 'Κωδικός', // added 18.04.2012
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Άγνωστο',
			'kindFolder'      : 'Φάκελος',
			'kindAlias'       : 'Ψευδώνυμο (alias)',
			'kindAliasBroken' : 'Μη έγκυρο ψευδώνυμο',
			// applications
			'kindApp'         : 'Εφαρμογή',
			'kindPostscript'  : 'Έγγραφο Postscript',
			'kindMsOffice'    : 'Έγγραφο Microsoft Office',
			'kindMsWord'      : 'Έγγραφο Microsoft Word',
			'kindMsExcel'     : 'Έγγραφο Microsoft Excel',
			'kindMsPP'        : 'Παρουσίαση Microsoft Powerpoint',
			'kindOO'          : 'Έγγραφο Open Office',
			'kindAppFlash'    : 'Εφαρμογή Flash',
			'kindPDF'         : 'Portable Document Format (PDF)',
			'kindTorrent'     : 'Αρχείο Bittorrent',
			'kind7z'          : 'Αρχείο 7z',
			'kindTAR'         : 'Αρχείο TAR',
			'kindGZIP'        : 'Αρχείο GZIP',
			'kindBZIP'        : 'Αρχείο BZIP',
			'kindXZ'          : 'Αρχείο XZ',
			'kindZIP'         : 'Αρχείο ZIP',
			'kindRAR'         : 'Αρχείο RAR',
			'kindJAR'         : 'Αρχείο Java JAR',
			'kindTTF'         : 'Γραμματοσειρά True Type',
			'kindOTF'         : 'Γραμματοσειρά Open Type',
			'kindRPM'         : 'Πακέτο RPM',
			// texts
			'kindText'        : 'Έγγραφο κειμένου',
			'kindTextPlain'   : 'Απλό κείμενο',
			'kindPHP'         : 'Κώδικας PHP',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'Έγγραφο HTML',
			'kindJS'          : 'Κώδικας Javascript',
			'kindRTF'         : 'Rich Text Format',
			'kindC'           : 'Κώδικας C',
			'kindCHeader'     : 'Κώδικας κεφαλίδας C',
			'kindCPP'         : 'Κώδικας C++',
			'kindCPPHeader'   : 'Κώδικας κεφαλίδας C++',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Κώδικας Python',
			'kindJava'        : 'Κώδικας Java',
			'kindRuby'        : 'Κώδικας Ruby',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'Κώδικας SQL',
			'kindXML'         : 'Έγγραφο XML',
			'kindAWK'         : 'Κώδικας AWK',
			'kindCSV'         : 'Τιμές χωρισμένες με κόμμα',
			'kindDOCBOOK'     : 'Έγγραφο Docbook XML',
			// images
			'kindImage'       : 'Εικόνα',
			'kindBMP'         : 'Εικόνα BMP',
			'kindJPEG'        : 'Εικόνα JPEG',
			'kindGIF'         : 'Εικόνα GIF',
			'kindPNG'         : 'Εικόνα PNG',
			'kindTIFF'        : 'Εικόνα TIFF',
			'kindTGA'         : 'Εικόνα TGA',
			'kindPSD'         : 'Εικόνα Adobe Photoshop',
			'kindXBITMAP'     : 'Εικόνα X bitmap',
			'kindPXM'         : 'Εικόνα Pixelmator',
			// media
			'kindAudio'       : 'Αρχεία ήχου',
			'kindAudioMPEG'   : 'Ήχος MPEG',
			'kindAudioMPEG4'  : 'Εικόνα MPEG-4',
			'kindAudioMIDI'   : 'Εικόνα MIDI',
			'kindAudioOGG'    : 'Εικόνα Ogg Vorbis',
			'kindAudioWAV'    : 'Εικόνα WAV',
			'AudioPlaylist'   : 'MP3 playlist',
			'kindVideo'       : 'Αρχεία media',
			'kindVideoDV'     : 'Ταινία DV',
			'kindVideoMPEG'   : 'Ταινία MPEG',
			'kindVideoMPEG4'  : 'Ταινία MPEG-4',
			'kindVideoAVI'    : 'Ταινία AVI',
			'kindVideoMOV'    : 'Ταινία Quick Time',
			'kindVideoWM'     : 'Ταινία Windows Media',
			'kindVideoFlash'  : 'Ταινία flash',
			'kindVideoMKV'    : 'Ταινία matroska',
			'kindVideoOGG'    : 'Ταινία ogg'
		}
	};
}));
